# Security Documentation

This document outlines the security measures implemented in the Watchdog Marketing application.

## Security Measures Implemented

### 🛡️ Input Validation & Sanitization

**Client-Side Validation:**

- Email format validation using regex
- Company name length validation (1-100 characters)
- Real-time validation feedback
- Input length limits (maxLength attributes)

**Server-Side Validation:**

- Duplicate validation of all client-side checks
- HTML sanitization using custom escapeHtml function
- Input trimming and normalization
- Strict type checking for JSON payloads

### 🛡️ Rate Limiting & DoS Protection

**Implementation:**

- 5 requests per 15 minutes per IP address
- In-memory rate limiting with automatic cleanup
- Memory leak prevention with periodic cleanup (every hour)
- IP detection from X-Forwarded-For and X-Real-IP headers

**Bot Detection:**

- User-Agent based bot detection
- Blocks common crawlers, scrapers, and automated tools
- Returns 403 Forbidden for detected bots

### 🛡️ Security Headers

**Implemented Headers:**

- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `X-XSS-Protection: 1; mode=block` - Legacy XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer information
- `Permissions-Policy` - Restricts browser features
- `Strict-Transport-Security` - Forces HTTPS (production only)

**Content Security Policy (CSP):**

```
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval';
style-src 'self' 'unsafe-inline' fonts.googleapis.com;
font-src 'self' fonts.gstatic.com;
img-src 'self' data: blob: https:;
connect-src 'self';
frame-ancestors 'none';
base-uri 'self';
form-action 'self';
object-src 'none';
upgrade-insecure-requests
```

### 🛡️ HTTPS & Transport Security

**Production Security:**

- Automatic HTTP to HTTPS redirect
- HSTS headers with preload directive
- Secure cookie settings
- X-Forwarded-Proto validation

### 🛡️ Cross-Origin Resource Sharing (CORS)

**Development:**

- Allows localhost origins for development
- Wildcard allowed for testing

**Production:**

- Strict origin validation
- Only allows explicitly configured domains
- 24-hour preflight cache

### 🛡️ Request Validation & Limits

**Middleware Protection:**

- 1MB request size limit for API endpoints
- Content-Type validation for POST requests
- JSON payload enforcement
- Request timeout protection (10 seconds)

### 🛡️ Environment Security

**Environment Variables:**

- Startup validation of required variables
- Format validation for API keys
- Graceful failure with informative errors
- No sensitive data in client-side code

### 🛡️ Error Handling & Information Disclosure

**Secure Error Handling:**

- Generic error messages to users
- No stack traces or internal details exposed
- Structured logging without sensitive data
- Proper HTTP status codes

### 🛡️ Email Security

**Email Notifications:**

- HTML sanitization in email content
- Safe email templates
- Rate limiting prevents email bombing
- Timeout protection for email service calls

## Security Checklist

### ✅ Completed

- [x] Input validation (client & server)
- [x] HTML sanitization
- [x] Rate limiting
- [x] Security headers
- [x] HTTPS enforcement
- [x] CORS configuration
- [x] Bot detection
- [x] Request size limits
- [x] Timeout protection
- [x] Environment validation
- [x] Error sanitization
- [x] XSS prevention

### 🔄 Recommended for Production

- [ ] **Replace in-memory rate limiting** with Redis or similar for multi-instance deployments
- [ ] **Add CAPTCHA** for form submissions if bot traffic increases
- [ ] **Implement monitoring** and alerting for security events
- [ ] **Add request logging** for security audit trails
- [ ] **Regular dependency updates** and vulnerability scanning
- [ ] **Web Application Firewall (WAF)** if hosting on cloud platforms

## Configuration Notes

### CORS Origins

Update the allowed origins in `middleware.ts` for production:

```typescript
const allowedOrigins = ['https://yourdomain.com', 'https://www.yourdomain.com']
```

### Rate Limiting

For production with multiple instances, consider using Redis:

```typescript
// Replace in-memory Map with Redis client
const rateLimitStore = new Redis(process.env.REDIS_URL)
```

## Security Monitoring

### Recommended Monitoring

- Failed authentication attempts
- Rate limit violations
- Bot detection triggers
- Unusual request patterns
- Error rates and types

### Log Analysis

- Monitor for security-related HTTP status codes (403, 429, 413)
- Track API endpoint usage patterns
- Alert on sudden traffic spikes

## Reporting Security Issues

If you discover a security vulnerability, please:

1. **Do not** create a public issue
2. Email security concerns to: security@watchdog.com
3. Include detailed information about the vulnerability
4. Allow reasonable time for response before disclosure

## Security Updates

This security documentation should be reviewed and updated:

- After any security-related code changes
- Following security audits or penetration testing
- When new threats or vulnerabilities are discovered
- At least quarterly as part of security reviews
