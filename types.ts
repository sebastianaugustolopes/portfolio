// Certificate type definition
export interface Certificate {
    id: string;
    name: string;
    institution: string;
    date: string;
    image?: string;
    verifyUrl?: string;
    description?: string;
    skills?: string[];
}
