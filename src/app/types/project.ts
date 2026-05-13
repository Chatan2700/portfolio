export type ProjectStatus = 'planned' | 'in-progress' | 'completed';

export type ProjectSection ={ 
    title: string;
    body: string;
}

export type ProjectImage ={ 
    src: string;
    alt: string; 
    caption?: string;
}

export type Project = {
    slug: string;
    title: string;
    summary: string;
    description: string;
    stack: string[];
    status: ProjectStatus;
    featured: boolean;
    image?: string;
    imageAlt?: string;
    githubUrl?: string;
    liveUrl?: string;
    startedAt?: string;
    completedAt?: string;
    
    //Detail page Content Test ?)
    sections?: ProjectSection[];
    gallery?: ProjectImage[];
}

