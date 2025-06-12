import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data: nouns, error: nounsError } = await supabase
    .from('nouns')
    .select('*');
  const { data: counterForms, error: counterFormsError } = await supabase
    .from('counter_forms')
    .select('*');

  if (nounsError || counterFormsError) {
    console.error("Error fetching data:", nounsError || counterFormsError);
    return {
      nouns: [],
      counterForms: [],
    };
  }

  return {
    nouns: nouns ?? [],
    counterForms: counterForms ?? [],
  };
}