import React from 'react';
import ProjectArchitectureSection from '../sections/ProjectArchitectureSection';
import PagesDemoSection from '../sections/PagesDemoSection';
import ProjectFeatureSection from './../sections/ProjectFeatureSection';

const ProjectDetailsPage = () => {
    console.log('ProjectDetailsPage loaded'); // এটা add করুন
    return (
        <>
            <ProjectArchitectureSection />
            <ProjectFeatureSection />
            <PagesDemoSection />
        </>
    );
};

export default ProjectDetailsPage;