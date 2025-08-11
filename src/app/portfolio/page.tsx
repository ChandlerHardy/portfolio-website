import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: 'AI Chatbot',
    description: 'An intelligent conversational AI chatbot built with modern web technologies, featuring natural language processing and real-time responses.',
    technologies: ['Next.js', 'TypeScript', 'AI/ML', 'OpenAI API', 'React'],
    image: '/ai-chatbot-screenshot.png',
    github: 'https://github.com/chandlerhardy/ai-chatbot',
    demo: 'https://ai-chatbot-pearl-psi.vercel.app/',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
    image: '/placeholder-project.jpg',
    github: 'https://github.com/chandlerhardy/ecommerce',
    demo: 'https://ecommerce-demo.vercel.app',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    image: '/placeholder-project.jpg',
    github: 'https://github.com/chandlerhardy/taskmanager',
    demo: 'https://taskmanager-demo.vercel.app',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current conditions and forecasts for multiple cities.',
    technologies: ['Vue.js', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    image: '/placeholder-project.jpg',
    github: 'https://github.com/chandlerhardy/weather-dashboard',
    demo: 'https://weather-dashboard-demo.vercel.app',
  },
  {
    id: 5,
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media metrics with data visualization and reporting features.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
    image: '/placeholder-project.jpg',
    github: 'https://github.com/chandlerhardy/social-analytics',
    demo: 'https://social-analytics-demo.vercel.app',
  },
];

export default function Portfolio() {
  return (
    <Box sx={{ width: '100%', pr: 3 }}>
      <Box sx={{ py: 2 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            My Portfolio
          </Typography>
          <Box sx={{ height: 4, width: 80, bgcolor: 'primary.main', borderRadius: 1, mb: 2 }} />
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800 }}>
            Here are some of the projects I&apos;ve worked on recently. Each project showcases different technologies and approaches to solving real-world problems.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)', 
            lg: 'repeat(3, 1fr)', 
            xl: 'repeat(4, 1fr)' 
          },
          gap: 3,
        }}>
          {projects.map((project) => (
            <Card 
              key={project.id}
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 4,
                }
              }}
            >
              <Box sx={{ 
                height: 200, 
                position: 'relative',
                overflow: 'hidden',
              }}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                ) : (
                  <Box sx={{ 
                    height: '100%',
                    bgcolor: 'grey.100', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'text.secondary'
                  }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Box sx={{ 
                        width: 64, 
                        height: 64, 
                        bgcolor: 'grey.300', 
                        borderRadius: 1, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 1
                      }}>
                        📱
                      </Box>
                      <Typography variant="body2">Project Image</Typography>
                    </Box>
                  </Box>
                )}
              </Box>
              
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                  {project.description}
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      variant="outlined"
                      color="primary"
                    />
                  ))}
                </Box>
                
                <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                  <Button
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHub />}
                    variant="outlined"
                    size="small"
                  >
                    Code
                  </Button>
                  <Button
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<Launch />}
                    variant="contained"
                    size="small"
                  >
                    Live Demo
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
