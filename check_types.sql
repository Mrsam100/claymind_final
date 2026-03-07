SELECT typname, typtype 
FROM pg_type 
WHERE typname IN ('user_role', 'account_status', 'flag_type', 'flag_status');
