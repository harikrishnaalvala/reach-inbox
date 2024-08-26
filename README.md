# ReachInbox Web App Documentation

## 1. Login Page Implementation

Implement a login page based on the provided design. Users should be able to login with google account

## 2. Onebox Screen

After successful login, users should be directed to the onebox screen at `/google-login`.


## 3. Installation

1. Clone the repository:
   ```
   git clone https://github.com/harikrishnaalvala/reach-inbox.git
   ```
3. Navigate to the project directory:
   ```
   cd Reach-in-Box
   npm i
   npm run dev
   ```

## 4. Fetching Data in Onebox

### API Endpoints:
- `GET /onebox/list`: Retrieve a list of threads for the user.
- `GET /onebox/:thread_id`: Retrieve details of a specific thread.
- `DELETE /onebox/:thread_id`: Delete a thread.

## 5. Keyboard Shortcuts in Onebox

- Pressing "d" should delete the selected thread.
- Pressing "r" should open the reply box for the selected thread.

## 6. Custom Text Editor

Implement a custom text editor with the following features:
- Addition of custom buttons like "SAVE" and "Variables" to enhance functionality.

## 7. Reply Functionality

Implement the ability to reply to threads:
- Clicking on the send button should send the reply.
- Use the API endpoint `POST /reply/:thread_id` to send the reply with the following payload:
  ```json
  {
    "from": "email",
    "to": "email",
    "subject": "",
    "body": "<html></html>"
  }

## 8. Light and Dark Mode
  Provide support for both light and dark mode themes within the web app.

 ## Technical Stack

- **Frontend:**
  - Tailwind
  - Material-UI
  - React
 
