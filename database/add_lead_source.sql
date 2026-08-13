ALTER TABLE contact_leads
    ADD COLUMN lead_source VARCHAR(100) NOT NULL DEFAULT 'Citiline Website' AFTER message,
    ADD COLUMN source_page VARCHAR(255) NULL AFTER lead_source,
    ADD COLUMN referrer VARCHAR(1000) NULL AFTER source_page,
    ADD COLUMN utm_source VARCHAR(255) NULL AFTER referrer,
    ADD COLUMN utm_medium VARCHAR(255) NULL AFTER utm_source,
    ADD COLUMN utm_campaign VARCHAR(255) NULL AFTER utm_medium,
    ADD INDEX idx_contact_leads_source (lead_source);
