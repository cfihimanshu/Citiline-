const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const htmlContent = fs.readFileSync(path.join(__dirname, '../it.html'), 'utf-8');
const $ = cheerio.load(htmlContent);

// 1. Extract CSS and append to globals.css
let cssContent = '';
$('style').each((i, el) => {
    cssContent += $(el).html() + '\n';
});

const globalsPath = path.join(__dirname, 'src/app/globals.css');
let globalsCss = fs.readFileSync(globalsPath, 'utf-8');
fs.writeFileSync(globalsPath, globalsCss + '\n' + cssContent);

// Helper function to convert style string to React style object string
function convertStyle(styleStr) {
    if (!styleStr) return '{}';
    const rules = styleStr.split(';').map(s => s.trim()).filter(Boolean);
    const obj = {};
    for (const rule of rules) {
        let [key, ...values] = rule.split(':');
        if (!key || values.length === 0) continue;
        key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        let val = values.join(':').trim();
        // Remove quotes if present
        val = val.replace(/^["']|["']$/g, '');
        obj[key] = val;
    }
    return JSON.stringify(obj);
}

// Helper to convert HTML to JSX
function htmlToJsx(html) {
    // Basic replacements
    let jsx = html
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
        .replace(/<br>/g, '<br />')
        .replace(/<hr>/g, '<hr />')
        .replace(/<img([^>]*?[^\/])>/g, '<img$1 />')
        .replace(/<input([^>]*?[^\/])>/g, '<input$1 />');
        
    // Fix styles
    jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
        return `style={${convertStyle(p1)}}`;
    });
    
    // Fix unclosed tags for iframe, etc., if any, though Cheerio usually normalizes
    // Remove svg attributes that conflict (like stroke-width -> strokeWidth)
    jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=')
             .replace(/stroke-linecap=/g, 'strokeLinecap=')
             .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
             .replace(/fill-rule=/g, 'fillRule=')
             .replace(/clip-rule=/g, 'clipRule=')
             .replace(/onclick=/g, 'onClick=')
             .replace(/onClick="showPage\('([^']+)'\)"/g, 'href="/$1"')
             .replace(/href="\/home"/g, 'href="/"')
             .replace(/<button([^>]+)href="([^"]+)"([^>]*)>([\s\S]*?)<\/button>/g, '<a$1href="$2"$3>$4</a>')
             .replace(/<footer-component><\/footer-component>/g, '')
             .replace(/<nav-component><\/nav-component>/g, '')
             .replace(/onClick="[^"]+"/g, '')
             .replace(/tabindex=/g, 'tabIndex=')
             .replace(/readonly=/g, 'readOnly=')
             .replace(/autocomplete=/g, 'autoComplete=');
             
    // Fix some specific things like xmlns:xlink
    jsx = jsx.replace(/xmlns:xlink/g, 'xmlnsXlink');

    return jsx;
}

// 2. Extract Navbar
const navHtml = $('nav').parent().html();
const navJsx = navHtml ? htmlToJsx($('nav').prop('outerHTML')) : '';

// 3. Extract Footer
const footerHtml = $('footer').parent().html();
const footerJsx = footerHtml ? htmlToJsx($('footer').prop('outerHTML')) : '';

// Create components directory
const compDir = path.join(__dirname, 'src/components');
if (!fs.existsSync(compDir)) fs.mkdirSync(compDir);

if (navJsx) {
    fs.writeFileSync(path.join(compDir, 'Navbar.tsx'), `export default function Navbar() { return (<>${navJsx}</>); }`);
}
if (footerJsx) {
    fs.writeFileSync(path.join(compDir, 'Footer.tsx'), `export default function Footer() { return (<>${footerJsx}</>); }`);
}


// 5. Extract Pages
const pages = $('.page');
pages.each((i, el) => {
    const pageId = $(el).attr('id'); // e.g., page-home, page-about
    if (!pageId) return;
    
    const pageName = pageId.replace('page-', '');
    let innerHtml = $(el).html();
    let jsx = htmlToJsx(innerHtml);
    
    const pageCode = `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}Page() {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            ${jsx}
        </motion.div>
    );
}`;

    if (pageName === 'home') {
        fs.writeFileSync(path.join(__dirname, 'src/app/page.tsx'), pageCode);
    } else {
        const dir = path.join(__dirname, 'src/app', pageName);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'page.tsx'), pageCode);
    }
});

console.log('Conversion complete!');
