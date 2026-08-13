CREATE TABLE IF NOT EXISTS contact_leads (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(80) NOT NULL,
    last_name VARCHAR(80) NOT NULL,
    email VARCHAR(160) NOT NULL,
    phone VARCHAR(30) NULL,
    company VARCHAR(160) NULL,
    service VARCHAR(120) NULL,
    message TEXT NOT NULL,
    lead_source VARCHAR(100) NOT NULL DEFAULT 'Citiline Website',
    source_page VARCHAR(255) NULL,
    referrer VARCHAR(1000) NULL,
    utm_source VARCHAR(255) NULL,
    utm_medium VARCHAR(255) NULL,
    utm_campaign VARCHAR(255) NULL,
    status ENUM('new', 'contacted', 'qualified', 'closed') NOT NULL DEFAULT 'new',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_contact_leads_email (email),
    INDEX idx_contact_leads_source (lead_source),
    INDEX idx_contact_leads_status_created (status, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Existing table upgrade (run only when the table was created before source tracking):
-- ALTER TABLE contact_leads
--   ADD COLUMN lead_source VARCHAR(100) NOT NULL DEFAULT 'Citiline Website' AFTER message,
--   ADD COLUMN source_page VARCHAR(255) NULL AFTER lead_source,
--   ADD COLUMN referrer VARCHAR(1000) NULL AFTER source_page,
--   ADD COLUMN utm_source VARCHAR(255) NULL AFTER referrer,
--   ADD COLUMN utm_medium VARCHAR(255) NULL AFTER utm_source,
--   ADD COLUMN utm_campaign VARCHAR(255) NULL AFTER utm_medium,
--   ADD INDEX idx_contact_leads_source (lead_source);
