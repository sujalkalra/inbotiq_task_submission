# Role-Based Authentication System

A full-stack web application demonstrating secure role-based authentication with separate User and Admin dashboards.

## 🚀 Live Demo

- **Frontend**: Deployed on Lovable
- **Backend**: Lovable Cloud (PostgreSQL + Authentication)

## 📋 Features

### Core Requirements ✅
- ✅ Role-based signup (User/Admin selection)
- ✅ Secure login with JWT authentication
- ✅ Password hashing with bcrypt
- ✅ Protected dashboard routes
- ✅ Role-specific dashboard content
- ✅ Logout functionality

### Additional Features
- ✅ Form validation with Zod
- ✅ Secure Row Level Security (RLS) policies
- ✅ Separate user_roles table (security best practice)
- ✅ Beautiful, responsive UI
- ✅ Toast notifications for user feedback
- ✅ TypeScript throughout

## 🛠️ Technology Stack

### Frontend
- **React** 18 with TypeScript
- **Vite** for fast development
- **TailwindCSS** for styling
- **Shadcn UI** components
- **React Router** for navigation
- **Zod** for form validation
- **React Hook Form** for form handling

### Backend
- **Lovable Cloud** (Supabase-powered)
- **PostgreSQL** database
- **Row Level Security** for data protection
- **JWT** authentication
- **bcrypt** password hashing (built-in)

## 🏗️ Architecture

### Database Schema

```sql
-- User roles enum
CREATE TYPE app_role AS ENUM ('user', 'admin');

-- Profiles table
CREATE TABLE profiles (
  id UUID PRIMARY KEY,
  user_id UUID UNIQUE REFERENCES auth.users,
  full_name TEXT NOT NULL
);

-- User roles table (security best practice: separate from profiles)
CREATE TABLE user_roles (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  role app_role NOT NULL,
  UNIQUE(user_id, role)
);
```

### Security Features

1. **Row Level Security (RLS)**: All tables protected with RLS policies
2. **Separate Roles Table**: Prevents privilege escalation attacks
3. **Security Definer Functions**: Prevents RLS recursion
4. **Input Validation**: Client and server-side validation with Zod
5. **Password Security**: Automatic bcrypt hashing via Supabase

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd <project-name>

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Environment Variables

Environment variables are automatically configured via Lovable Cloud:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## 📱 Usage

### Creating an Account

1. Navigate to `/signup`
2. Fill in your details:
   - Full Name
   - Email
   - Password (min 6 characters)
   - Role (User or Admin)
3. Click "Sign Up"

### Logging In

1. Navigate to `/login`
2. Enter your email and password
3. Click "Sign In"

### Dashboard Access

After login, you'll be redirected to `/dashboard` where you'll see:

**User Dashboard:**
- Welcome message with your name
- User badge
- Access to personal profile and settings
- Account information

**Admin Dashboard:**
- Welcome message with your name
- Admin badge
- Administrative privileges section
- Access to user management and system analytics
- Account information

## 🔒 Security Best Practices Implemented

1. ✅ Roles stored in separate table (not in profiles)
2. ✅ All database operations protected by RLS policies
3. ✅ Input validation on client and server
4. ✅ No sensitive data in localStorage
5. ✅ Proper error handling without exposing system details
6. ✅ CSRF protection via Supabase
7. ✅ SQL injection prevention via parameterized queries
8. ✅ Session-based authentication with secure tokens

## 📁 Project Structure

```
src/
├── components/
│   └── ui/              # Shadcn UI components
├── contexts/
│   └── AuthContext.tsx  # Authentication context
├── hooks/
│   └── use-toast.ts     # Toast notifications
├── integrations/
│   └── supabase/        # Supabase client (auto-generated)
├── pages/
│   ├── LandingPage.tsx  # Home page
│   ├── Signup.tsx       # Registration
│   ├── Login.tsx        # Authentication
│   ├── Dashboard.tsx    # Protected dashboard
│   └── NotFound.tsx     # 404 page
├── App.tsx              # Main app with routes
└── main.tsx             # Entry point
```

## 🎨 Design System

The application uses a custom dark-themed design system with:
- Deep slate backgrounds (`hsl(220 25% 7%)`)
- Vibrant blue accents (`hsl(217 91% 60%)`)
- Smooth transitions and animations
- Professional card-based layouts
- Responsive design for all screen sizes

## 🧪 Testing

### Manual Testing

1. **Signup Flow**:
   - Test with valid data
   - Test with invalid email
   - Test with short password
   - Test with existing email

2. **Login Flow**:
   - Test with correct credentials
   - Test with wrong password
   - Test with non-existent email

3. **Dashboard Access**:
   - Test protected route without login
   - Test User role features
   - Test Admin role features
   - Test logout functionality

## 📦 Deployment

### Frontend Deployment (Automatic)
- Deployed automatically via Lovable
- Click "Publish" in Lovable interface
- Custom domains supported

### Backend Deployment (Automatic)
- Database and authentication automatically deployed
- RLS policies applied automatically
- Zero configuration needed

## 🤝 API Endpoints

Backend authentication handled automatically by Lovable Cloud:

- `POST /auth/signup` - Create new account
- `POST /auth/login` - Authenticate user
- `GET /auth/me` - Get current user
- `POST /auth/logout` - Sign out

## 📈 Future Enhancements

- [ ] Email verification
- [ ] Password reset functionality
- [ ] User profile editing
- [ ] Admin user management interface
- [ ] Activity logs
- [ ] Two-factor authentication
- [ ] Social login (Google, GitHub)

## 🐛 Known Issues

None currently. Email confirm is disabled for faster testing.

## 📄 License

This project is open source and available for portfolio use.

## 👤 Author

Full Stack Developer - [Your Name]

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev)
- UI components from [Shadcn UI](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
