interface ExperienceInterface {
  position   : string;
  company    : string;
  date       : string;
  description: string[];
  actually   : boolean;
  url_company: string;
  url_recommendation_letter: string;
}

interface GitCommand {
  command    : string;
  description: string;
}

interface BlogPostInterface {
  title      : string;
  image      : string;
  date      : string;
  category   : string;
  description: string;
  commands   : GitCommand[];
}