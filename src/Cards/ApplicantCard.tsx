import React from 'react';
import { Applicant } from '../Data/dummyData';

interface ApplicantCardProps {
  applicant: Applicant;
}

const ApplicantCard: React.FC<ApplicantCardProps> = ({ applicant }) => {
  return (
    <div className="applicant-card">
      <div className="applicant-content bg-blue-300">
        <div className="applicant-info">
          <h2 style={{ color: "green", marginLeft: 4 }}>{applicant.name}</h2>
          <p style={{ marginLeft: 4 }}>{applicant.email}</p>
          <p style={{ marginLeft: 4 }} className="snippet">{applicant.snippet}</p>
          {applicant.date && <p>Date: {new Date(applicant.date).toLocaleString()}</p>}
        </div>
        <div className="att-container">
          {applicant.attachments.map((attachment, index) => (
          
              <a className ="linkkk" href={attachment.downloadUrl} key={index} target="_blank" rel="noopener noreferrer">
                Click the Link to Download document
              </a>
    
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicantCard;
