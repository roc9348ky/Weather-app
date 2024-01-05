import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';








export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1663064607895-309dc594fde7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    let COLD_URL = "https://images.unsplash.com/photo-1613416721439-9c2d988ab9cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENPTEQlMjBXRUFUSEVSfGVufDB8fDB8fHww";

    let HOT_URL = "https://plus.unsplash.com/premium_photo-1688804790295-8356369391ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    let RAIN_URL = "https://images.unsplash.com/photo-1613739118925-cde1e8f5d65b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UkFJTiUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";

   
    return (
        <div className="info-box">
            
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {
            info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <SevereColdIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary"component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>Weather = {info.weather}</p>
        </Typography>
      </CardContent>
    </Card>
            </div>
    );
}