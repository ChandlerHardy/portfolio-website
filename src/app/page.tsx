import Link from "next/link";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { Work, Person, Email } from "@mui/icons-material";

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 
  'Python', 'PostgreSQL', 'AWS', 'Docker',
  'Tailwind CSS', 'GraphQL', 'MongoDB', 'Git'
];

export default function Home() {
  return (
    <Box sx={{ maxWidth: 'lg', pr: 3 }}>
      <Box sx={{ py: 2 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Chandler Hardy
          </Typography>
          <Typography variant="h4" color="primary" gutterBottom sx={{ mb: 3 }}>
            Full Stack Developer
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
            I create modern, scalable web applications with a focus on user experience 
            and clean, maintainable code.
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button
              component={Link}
              href="/portfolio"
              variant="contained"
              size="large"
              startIcon={<Work />}
            >
              View My Work
            </Button>
            <Button
              component={Link}
              href="/about"
              variant="outlined"
              size="large"
              startIcon={<Person />}
            >
              About Me
            </Button>
          </Box>
        </Box>

        {/* Quick Stats */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 3,
          mb: 8 
        }}>
          <Card sx={{ textAlign: 'center', height: '100%' }}>
            <CardContent>
              <Typography variant="h3" color="primary" gutterBottom>
                5+
              </Typography>
              <Typography color="text.secondary">
                Years Experience
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ textAlign: 'center', height: '100%' }}>
            <CardContent>
              <Typography variant="h3" color="secondary" gutterBottom>
                50+
              </Typography>
              <Typography color="text.secondary">
                Projects Completed
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ textAlign: 'center', height: '100%' }}>
            <CardContent>
              <Typography variant="h3" sx={{ color: 'purple.main' }} gutterBottom>
                15+
              </Typography>
              <Typography color="text.secondary">
                Technologies Mastered
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Featured Technologies */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h3" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            Technologies I Work With
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
            {technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                variant="outlined"
                sx={{ m: 0.5, fontSize: '0.875rem' }}
              />
            ))}
          </Box>
        </Box>

        {/* Contact CTA */}
        <Card sx={{ 
          background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
          color: 'white',
          textAlign: 'center',
          '& .MuiTypography-root': { color: 'white' }
        }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" component="h3" gutterBottom>
              Let&apos;s Work Together
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              I&apos;m always interested in new opportunities and exciting projects. 
              Feel free to reach out if you&apos;d like to collaborate!
            </Typography>
            <Button
              href="mailto:hello@chandlerhardy.com"
              variant="contained"
              size="large"
              startIcon={<Email />}
              sx={{ 
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'grey.100',
                }
              }}
            >
              Get In Touch
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
