# All Endpoints in `all.js`

---

## `/customer/v3/organizations`

| Method | Endpoint | Params |
|--------|----------|--------|
| GET | `customer/v3/organizations/{orgId}` | — |
| GET | `customer/v3/organizations/{orgId}/products` | — |
| GET | `customer/v3/organizations/{orgId}/users` | **Query (optional):** `identificationCode` |
| POST | `customer/v3/organizations/{orgId}/users` | **Body:** user object |
| GET | `customer/v3/organizations/{orgId}/users/{userId}` | — |
| PUT | `customer/v3/organizations/{orgId}/users/{userId}` | **Body:** user object |
| DELETE | `customer/v3/organizations/{orgId}/users/{userId}` | — |
| GET | `customer/v3/organizations/{orgId}/products/{productId}/activation` | — |
| PUT | `customer/v3/organizations/{orgId}/products/{productId}/activation` | **Body:** `{ intention }` |
| GET | `customer/v3/organizations/participant/{participantId}` | — |

---

## `/customer/v3/users`

| Method | Endpoint | Params |
|--------|----------|--------|
| GET | `customer/v3/users/me` | — |
| PATCH | `customer/v3/users/me` | **Body:** user fields · **Headers:** `Content-Type: application/json`, `Accept: application/json` |
| PUT | `customer/v3/users/{userId}` | **Body:** full user object · **Headers:** `Content-Type: application/json`, `Accept: application/json` |

---

## `/customer/v3/sessions`

| Method | Endpoint | Params |
|--------|----------|--------|
| POST | `customer/v3/sessions` | **Body (form-urlencoded):** `participantid` · **Headers:** `Content-Type: application/x-www-form-urlencoded` |

---

## `/customer/v3/usermemberships`

| Method | Endpoint | Params |
|--------|----------|--------|
| GET | `customer/v3/usermemberships/` | **Query params:** filter object |

---

## `/customer/v3/participants`

| Method | Endpoint | Params |
|--------|----------|--------|
| GET | `customer/v3/participants/{participantId}/transportsubscriptions/{subscriptionId}` | — |
| PUT | `customer/v3/participants/{participantId}/transportsubscriptions/{subscriptionId}/properties` | **Body:** `{ name, value }` |

---

## `/customer/v3/addressverifications`

| Method | Endpoint | Params |
|--------|----------|--------|
| GET | `customer/v3/addressverifications/{id}` | — |
| PUT | `customer/v3/addressverifications/{id}` | **Body:** `{ verificationCode }` |

---

## `/customer/v3/systeminformations`

| Method | Endpoint | Params |
|--------|----------|--------|
| GET | `/customer/v3/systeminformations/restricted` | — · **Headers:** `Accept: application/json` |

---

## `/customer/ela/participant`

| Method | Endpoint | Params |
|--------|----------|--------|
| GET | `customer/ela/participant/{participantId}/config` | — |
| PUT | `customer/ela/participant/{participantId}/config/deliverytype` | **Body:** delivery type config |
| PUT | `customer/ela/participant/{participantId}/config/maxreceive` | **Body:** max receive config |
| GET | `customer/ela/participant/{participantId}/options/auto-assign-biller` | — |
| PUT | `customer/ela/participant/{participantId}/options/auto-assign-biller/` | **Body:** option value |
| GET | `customer/ela/participant/{participantId}/options/large-documents` | — |
| PUT | `customer/ela/participant/{participantId}/options/large-documents` | **Body:** `{ participantId, optionName: "large-documents", status }` |
| PUT | `customer/ela/participant/{participantId}/options/le-kt-print/` | **Body:** `{ status }` (`"ACTIVATED"` \| `"NOT_ACTIVATED"`) |
| PUT | `customer/ela/participant/{participantId}/options/le-le-send/` | **Body:** option status |
| GET | `customer/ela/participant/{participantId}/patientoptions` | — |
| PUT | `customer/ela/participant/{participantId}/patientoptions` | **Body:** `{ portalType, tpPrintActivationDto, tgPrintActivationDto }` |

---

## `/customer/trustcenter`

| Method | Endpoint | Params |
|--------|----------|--------|
| GET | `customer/trustcenterconfigurations/simple/{participantId}` | — |
| PUT | `customer/trustcenterconfigurations/simple/{participantId}` | **Body:** `{ participantId, trustcenterParticipantId }` |
| DELETE | `customer/trustcenterconfigurations/{id}` | — |
| GET | `customer/trustcenterpartners` | **Query:** `trustcenterid` |

---

## `/customer/clientcertificates` & `/customer/ui/webservices`

| Method | Endpoint | Params |
|--------|----------|--------|
| GET | `/customer/ui/webservices` | **Headers:** `Accept: application/json` |
| POST | `/customer/clientcertificates` | **Body:** certificate request data · **Headers:** `Accept: application/json` |
| GET | `/customer/clientcertificates/{id}` | **Headers:** `Accept: application/json` |

---

## `/notification/v3`

| Method | Endpoint | Params |
|--------|----------|--------|
| GET | `/notification/v3/dashboard` | **Headers:** `Content-Type: application/json`, `Accept: application/json` → returns `{ countUnread }` |
| GET | `/notification/v3/configurations` | — |
| GET | `/notification/v3/configurations/` | **Query:** `currentContactOnly` (boolean) |
| POST | `/notification/v3/configurations` | **Body:** configuration object · **Headers:** `Content-Type: application/json`, `Accept: application/json` |
| PUT | `/notification/v3/contactrecipients` | **Body:** recipient object · **Headers:** `Content-Type: application/json`, `Accept: application/json` |
| GET | `/notification/v3/notifications` | — |
| GET | `/notification/v3/notifications/{id}` | — |
| PUT | `/notification/v3/notifications/{id}/status` | **Body:** status value |
| POST | `/notification/v3/notifications/export` | **Body:** export filter params |

---

## `/processinginfo/v1`

| Method | Endpoint | Params |
|--------|----------|--------|
| GET | `/processinginfo/v1/elatransmissioninformation` | **Query:** `participantid`, `datefrom` (ISO datetime), `dateto` (ISO datetime) |
| GET | `/processinginfo/v1/elatransmissioninformation/{id}` | **Query:** `participantid`, `transmissiontype` |
| POST | `/processinginfo/v1/elatransmissioninformation/export` | **Body:** `{ participantid, datefrom, dateto, ... }` |

---

## `/patientdelivery/v1/senders`

| Method | Endpoint | Params |
|--------|----------|--------|
| GET | `/patientdelivery/v1/senders/{senderId}/configurations` | — |
| POST | `/patientdelivery/v1/senders/{senderId}/configurations` | **Body:** configuration object |
| PUT | `/patientdelivery/v1/senders/{senderId}/configurations/{configId}` | **Body:** configuration object |
| PUT | `/patientdelivery/v1/senders/{senderId}/configurations/{configId}/logo` | **Body:** binary JPEG · **Headers:** `Content-Type: image/jpeg` |

---

## `/auth/rest` (Axios)

| Method | Endpoint | Params |
|--------|----------|--------|
| POST | `/auth/rest/public/authentication/applications/kundenportal-strong/access` | **Headers:** `X-CSRFT759`, `X-Same-Domain: 1` |
| POST | `/auth/rest/public/authentication/mtan/otp/check` | **Body:** `{ otp }` · **Headers:** `X-CSRFT759`, `X-Same-Domain: 1`, `Content-Type: application/json` |
| POST | `/auth/rest/public/authentication/email/otp/check` | **Body:** `{ otp }` · **Headers:** `X-CSRFT759`, `X-Same-Domain: 1`, `Content-Type: application/json` |
| GET | `/auth/rest/protected/self-service/flows/password-change/select` | **Headers:** `Accept: */*`, `Accept-Language` |
| POST | `/auth/rest/protected/self-service/flows/password-change/select` | **Body (form-urlencoded)** · **Headers:** `Accept: */*`, `Content-Type: application/x-www-form-urlencoded` |
| POST | `/auth/rest/protected/self-service/password/change` | **Body:** `{ oldPassword, newPassword }` · **Headers:** `X-CSRFT759`, `X-Same-Domain: 1`, `X-Requested-With: XMLHttpRequest`, `Content-Type: application/json` |

---

## Legacy jQuery `$.ajax` endpoints (md/online)

| Method | Endpoint | Params |
|--------|----------|--------|
| PUT | `/md/online/customer/ela/participant/{participantId}/options/le-kt-print` | **Body:** `{ status }` (`"ACTIVATED"` \| `"NOT_ACTIVATED"`) · `Content-Type: application/json` |
| PUT | `/md/online/customer/trustcenterconfigurations/simple/{participantId}` | **Body:** `{ participantId, trustcenterParticipantId }` · `Content-Type: application/json` |
| PUT | `/md/online/customer/ela/participant/{participantId}/patientoptions` | **Body:** `{ portalType, tpPrintActivationDto, tgPrintActivationDto }` · `Content-Type: application/json` |
| GET | `{clientCertificateUrl}` (from `Location` response header) | **Headers:** `Accept: application/json` |
| GET | `{assignUserForm action}` | **Query:** `identificationcode` |
| GET | `{notificationTickerDiv.href}` | **Headers:** `Content-Type: application/json` |
| POST | `/md/web/index.php?eID=gln` | **Body:** `{ name }` · `Content-Type: application/json` |
| GET | `{signFileUrl}?name={name}&size={size}` | S3 signing credentials |
| POST | `{S3 bucket URL}` | **Body:** `FormData` (file + S3 signing fields) |
| POST | `{MailChimp action URL}` | Subscription data (JSONP) |

---

## External Endpoints

| Method | Endpoint | Params |
|--------|----------|--------|
| POST | `https://www.zefix.ch/ZefixREST/api/v1/firm/search.json` | **Body:** `{ languageKey, maxEntries, name, offset }` · `Content-Type: application/json` |
| GET | `https://vimeo.com/api/oembed.json` | **Query:** `url`, `width=1920`, `height=1080` |
