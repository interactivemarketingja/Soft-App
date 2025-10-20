import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../lib/supabase';
import { Box, Container } from '@chakra-ui/react';

export function AuthPage() {
  return (
    <Container maxW="container.sm" py={10}>
      <Box p={8} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google']}
          view="sign_in"
          theme="dark"
          showLinks={true}
          redirectTo={window.location.origin}
        />
      </Box>
    </Container>
  );
}