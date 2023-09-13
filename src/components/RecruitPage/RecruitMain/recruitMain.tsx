import React from 'react';
import RecruitHero from '../RecruitHero/recruitHero';
import JobInfo from '../JobInfo/jobInfo';
import EntryForm from '../EntryForm/entryForm';

const RecruitMain: React.FC = () => {
  return (
    <main className="relative overflow-hidden w-full">
      <RecruitHero />
      <JobInfo />
      <EntryForm />
    </main>
  );
};

export default RecruitMain;