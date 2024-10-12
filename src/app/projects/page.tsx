import Container from '@/components/Container';
import projectsProps from '@/components/Projects';
import ProjectTile from '@/components/ProjectTile';

export default function Projects() {
  return (
    <Container className="flex flex-col gap-6 pb-32 pt-64">
      <h1 className="text-center">Projects</h1>
      <p className="text-center">
        Take a look at my <span className="font-bold">amazing projects </span>
        here
      </p>
      <div className="flex flex-wrap justify-center gap-12">
        <ProjectTile {...projectsProps['swd']} />
        <ProjectTile {...projectsProps['spiderman']} />
        <ProjectTile {...projectsProps['dreamForest']} />
        <ProjectTile {...projectsProps['sneakers']} />
        <ProjectTile {...projectsProps['jkk']} />
        <ProjectTile {...projectsProps['heavenly']} />
        <ProjectTile {...projectsProps['transmition']} />
        <ProjectTile {...projectsProps['high']} />
      </div>
    </Container>
  );
}
