
const allowedOrigins = ['http://localhost:5173'];

// Define the CORS options
const options = {
  origin: allowedOrigins,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // if your application uses cookies/sessions
  optionsSuccessStatus: 204
};

export default options;