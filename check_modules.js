import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://iqsgicgowgawmrijqxrd.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlxc2dpY2dvd2dhd21yaWpxeHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5NDgzMjgsImV4cCI6MjA4MjUyNDMyOH0.9eJUpXOYdrzrUWp8oqemd9_6E1MdxLxMFXuZ6qKOPR8';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkModules() {
  console.log('Checking modules in database...\n');
  
  const { data: modules, error } = await supabase
    .from('modules')
    .select('id, title, total_lessons')
    .eq('is_published', true);
  
  if (error) {
    console.error('❌ Error:', error);
    return;
  }
  
  console.log(`✅ Found ${modules.length} modules:\n`);
  modules.forEach(m => {
    console.log(`  - ${m.id}: ${m.title} (${m.total_lessons} lessons)`);
  });
  
  // Check lessons for ethics-safety
  console.log('\nChecking ethics-safety lessons...');
  const { data: lessons, error: lessonsError } = await supabase
    .from('lessons')
    .select('id, title')
    .eq('module_id', 'ethics-safety')
    .order('lesson_number');
  
  if (lessonsError) {
    console.error('❌ Error:', lessonsError);
  } else {
    console.log(`✅ Found ${lessons.length} lessons`);
    lessons.slice(0, 3).forEach(l => console.log(`  - ${l.id}: ${l.title}`));
  }
}

checkModules();
