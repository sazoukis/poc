# Endpoints in `all.js`

## Internal API Endpoints

### 1. PUT `/md/online/customer/ela/participant/{participantId}/options/le-kt-print`
- **Function:** `showElaConfigWizardTrustcenterConfSettings()`
- **URL params:** `participantId` (from `window.participantId`)
- **Body (JSON):** `status` — `"ACTIVATED"` or `"NOT_ACTIVATED"`
- **Headers:** `Content-Type: application/json`

---

### 2. PUT `/md/online/customer/trustcenterconfigurations/simple/{participantId}`
- **Function:** `showElaConfigWizardPatientPortalSettings()`
- **URL params:** `participantId` (from `window.participantId`)
- **Body (JSON):** `participantId`, `trustcenterParticipantId`
- **Headers:** `Content-Type: application/json`

---

### 3. PUT `/md/online/customer/ela/participant/{participantId}/patientoptions`
- **Function:** `closeModal()`
- **URL params:** `participantId` (from `window.participantId`)
- **Body (JSON):** `portalType`, `tpPrintActivationDto`, `tgPrintActivationDto`
- **Headers:** `Content-Type: application/json`

---

### 4. POST `/auth/rest/public/authentication/applications/kundenportal-strong/access`
- **Function:** `sendOtp()`
- **Purpose:** Initiate OTP authentication
- **Headers:** `X-Same-Domain: 1`, `X-CSRFT759: {token}`

---

### 5. POST `/auth/rest/public/authentication/mtan/otp/check` *(dynamic URL)*
- **Purpose:** OTP verification via SMS
- **Headers:** `X-Same-Domain: 1`, `X-CSRFT759: {token}`
- **Body (JSON):** `otp`

---

### 6. POST `/auth/rest/public/authentication/email/otp/check` *(dynamic URL)*
- **Purpose:** OTP verification via Email
- **Headers:** `X-Same-Domain: 1`, `X-CSRFT759: {token}`
- **Body (JSON):** `otp`

---

### 7. POST `/md/web/index.php?eID=gln`
- **Purpose:** Select2 AJAX search for GLN numbers
- **Body (JSON):** `name`
- **Headers:** `Content-Type: application/json`
- **Delay:** 1000ms debounce

---

## Dynamic / Form-Driven Endpoints

### 8. GET `{clientCertificateUrl}`
- **Function:** `checkClientCertificateStatus()`
- **URL source:** `Location` header from a previous response
- **Headers:** `Accept: application/json`, `Content-Type: application/json`

---

### 9. GET `{$('#assignUserForm').prop('action')}`
- **Function:** `checkIdentificationCode()`
- **Query params:** `identificationcode`
- **Response type:** JSON

---

### 10. GET `{notificationTickerDiv.href}`
- **Function:** `changeNotificationTickerIcon()`
- **URL source:** `href` attribute of `#notification-ticker` element
- **Headers:** `Content-Type: application/json`

---

### 11. GET `{signFileUrl}`
- **Function:** `signFile()`
- **Purpose:** Get S3 signing credentials for file upload
- **Query params:** `name` (file name), `size` (file size)

---

### 12. POST `{url}` (passed as argument)
- **Function:** `submitConfig(url)`
- **Body (JSON):** array of configuration DTOs

---

### 13. PUT `{url}` (passed as argument)
- **Function:** `submitChannels(url)`
- **Body (JSON):** channel configuration DTO

---

### 14. PUT `{logoUrl}`
- **Function:** `uploadLogo()`
- **URL source:** form action + `/logo` or `Location` response header + `/logo`
- **Body:** binary image file
- **Headers:** `Content-Type: image/jpeg`
- **Note:** `processData: false` (raw binary)

---

## External Endpoints

### 15. POST `https://www.zefix.ch/ZefixREST/api/v1/firm/search.json`
- **Purpose:** Swiss company registry (Zefix) search
- **Body (JSON):** `languageKey`, `maxEntries`, `name`, `offset`
- **Headers:** `Content-Type: application/json`
- **Delay:** 1000ms debounce

---

### 16. POST `{S3 bucket URL}`
- **Function:** `uploadS3()`
- **Purpose:** Upload file to AWS S3
- **Body:** `FormData` containing file + S3 signing data

---

### 17. POST `{MailChimp action URL}`
- **Purpose:** MailChimp newsletter subscription
- **Transport:** JSONP
- **Body:** user subscription data
