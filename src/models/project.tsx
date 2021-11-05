export interface Project {
    name: string;
    description: string;
    technologies: string;
    links: Link;
    image: string;
}

interface Link {
    url: string;
    repo: string;
}
