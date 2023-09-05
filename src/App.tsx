import { Typography } from '@/components/ui-toolkit/typography/Typography.tsx';

function App() {
  return (
    <div>
      <Typography variant="h1" as="h1">
        H1 text
      </Typography>
      <Typography variant="h2" as="h2">
        H2 text
      </Typography>
      <Typography variant="body1" as="p">
        body1 text
      </Typography>
      <Typography variant="error" as="p">
        error text
      </Typography>
    </div>
  );
}

export default App;
