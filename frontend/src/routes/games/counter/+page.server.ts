import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
  depends('supabase:db:nouns')
  depends('supabase:db:counter_forms')

  const { data: nouns } = await supabase.from('nouns').select('*');
  const { data: counterForms } = await supabase.from('counter_forms').select('*');

  return {
    nouns: nouns ?? [],
    counterForms: counterForms ?? [],
  };
};