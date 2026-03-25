import { NextRequest } from 'next/server';

// Mock data for projects
const mockProjects = [
  {
    id: '1',
    title: 'Agentic AI System',
    description: 'Advanced AI system with autonomous agents capable of complex task execution and decision making.',
    technologies: ['Python', 'LangGraph', 'OpenAI API', 'Vector DB'],
    link: '#',
    category: 'AI',
  },
  {
    id: '2',
    title: 'Enterprise LLM Integration',
    description: 'Scalable solution for integrating large language models into enterprise workflows.',
    technologies: ['TypeScript', 'Next.js', 'PostgreSQL', 'Redis'],
    link: '#',
    category: 'AI',
  },
  {
    id: '3',
    title: 'Intelligent Analytics Platform',
    description: 'Data analytics platform with AI-powered insights and predictive modeling capabilities.',
    technologies: ['React', 'TensorFlow', 'Node.js', 'MongoDB'],
    link: '#',
    category: 'Analytics',
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = searchParams.get('limit');
    const offset = searchParams.get('offset');

    let filteredProjects = [...mockProjects];

    // Filter by category if provided
    if (category) {
      filteredProjects = filteredProjects.filter(
        project => project.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    // Apply pagination if provided
    const limitNum = limit ? parseInt(limit, 10) : filteredProjects.length;
    const offsetNum = offset ? parseInt(offset, 10) : 0;

    const paginatedProjects = filteredProjects.slice(offsetNum, offsetNum + limitNum);

    return Response.json({
      projects: paginatedProjects,
      total: filteredProjects.length,
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return Response.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}