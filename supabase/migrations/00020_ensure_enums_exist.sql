-- Ensure all required enum types exist
-- This fixes "type user_role does not exist" error

-- Create enums if they don't exist (PostgreSQL 9.1+)
DO $$ BEGIN
    CREATE TYPE user_role AS ENUM ('student', 'parent', 'teacher', 'admin');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE account_status AS ENUM ('active', 'suspended', 'pending_verification', 'deleted');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE flag_type AS ENUM ('inappropriate', 'safety_concern', 'spam', 'copyright', 'other');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE flag_status AS ENUM ('pending', 'reviewed', 'resolved', 'dismissed');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

COMMENT ON TYPE user_role IS 'User roles: student, parent, teacher, admin';
COMMENT ON TYPE account_status IS 'Account status types';
