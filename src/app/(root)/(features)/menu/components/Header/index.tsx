import { TakeoutDining } from "@mui/icons-material";
import { Card, Stack, Typography } from "@mui/material";

export default function Header() {
    return (
        <Card sx={{ padding: '1rem' }}>
            <Stack direction={'row'} paddingX={2} paddingY={2} spacing={2} alignItems={'center'}>
                <TakeoutDining sx={{fontSize: '3rem'}} color="primary"/>
                <Typography variant="h1" fontWeight="bold">
                    Um Sushi
                </Typography>
            </Stack>
        </Card>
    )
}