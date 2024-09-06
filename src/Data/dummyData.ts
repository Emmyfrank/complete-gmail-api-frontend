
export interface Applicant {
  id: string;
  snippet: string;
  name: string;
  email: string;
  date: string | null;
  attachments: {
    mimeType: string;
    filename: string;
    downloadUrl: string;
  }[];
}

export const sampleData: Applicant[] = [
  
];