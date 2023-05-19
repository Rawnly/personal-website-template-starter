export interface SiteConfig {
  name: string;
  jobTitle: string;
  description?: string;
  email?: string;
  phoneNumber?: string | string[];
}

const config: SiteConfig = {
  name: "John Doe",
  jobTitle: "Software Engineer",
  description: "I am a software engineer with a passion for building things.",
  email: "j.doe@me.it",
  phoneNumber: ["+1 (123) 456-7890", "+39 123 456 7890"],
};

export default config;
