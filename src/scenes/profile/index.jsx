import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Header from "../../components/Header";


const Profile = () => {

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PROFILE PAGE" subtitle="Welcome to your dashboard" />
        </Box>

    <ThemeProvider
        theme={{
            palette: {
                primary: {
                    main: '#1f2a40',
                    dark: '#0066CC',
                },
            },
        }}
    >
     <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box
        sx={{
          width: 300,
          height: 200,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />

    <Box
        sx={{
          width: 300,
          height: 200,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />

      <Box
        sx={{
          width: 300,
          height: 200,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />

      <Box
        sx={{
          width: 300,
          height: 200,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />

      </Box>

      </ThemeProvider>
      </Box>
    );
};

export default Profile;