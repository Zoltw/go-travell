export interface Language {
  ISO2: string,
  fullName: string,
}

export const Polish: Language = {
  ISO2: 'pl',
  fullName: 'Polski',
};

export const English: Language = {
  ISO2: 'en',
  fullName: 'English',
};

export const LanguagesAll: Language[] = [
  English,
  Polish,
];
