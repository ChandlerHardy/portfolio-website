import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
} from "@mui/material";

const skills = [
  'TypeScript', 'React', 'Next.js', 'Node.js',
  'Python', 'PostgreSQL', 'MongoDB', 'AWS',
  'Docker', 'Git', 'Tailwind CSS', 'GraphQL'
];

export default function About() {
  return (
    <Box sx={{ maxWidth: 'fit-content', pr: 3 }}>
      <Box sx={{ py: 2 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            About Me
          </Typography>
          <Box sx={{ height: 4, width: 80, bgcolor: 'primary.main', borderRadius: 1 }} />
        </Box>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 3,
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Hello! I&apos;m Chandler Hardy
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  I&apos;m a passionate developer with a love for creating innovative solutions 
                  and building amazing user experiences. With expertise in modern web 
                  technologies, I enjoy tackling complex problems and turning ideas into reality.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Skills & Technologies
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                  {skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      color="primary"
                      size="small"
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Experience
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}>
                  <Box sx={{ borderLeft: 4, borderColor: 'primary.main', pl: 2 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Senior Developer
                    </Typography>
                    <Typography variant="body2" color="primary" gutterBottom>
                      2022 - Present
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Leading development of scalable web applications and mentoring junior developers.
                    </Typography>
                  </Box>
                  <Box sx={{ borderLeft: 4, borderColor: 'secondary.main', pl: 2 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Full Stack Developer
                    </Typography>
                    <Typography variant="body2" color="secondary" gutterBottom>
                      2020 - 2022
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Developed and maintained multiple client projects using modern web technologies.
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Education
                </Typography>
                <Box sx={{ borderLeft: 4, borderColor: 'purple.main', pl: 2, mt: 2 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Computer Science Degree
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'purple.main' }} gutterBottom>
                    University Name • 2020
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Bachelor of Science in Computer Science with focus on software engineering.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
