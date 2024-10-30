# Onsi Frontend Interview

Thanks for taking the time to interview with us, we are looking forward to working together over the next hour.

## Getting started

This is a React project build with Create React App. It uses Typecript and React Router. To get set up:

1. `nvm use`
2. `npm install`
3. `npm start`

At this point, you should see a welcome page.

## Instructions

Your task for today will require you to work with some existing code that needs refactoring. In `App.tsx` you will see two sign up routes: `/sign-up/partner/:partnerName/code/:partnerCode` and `/sign-up/:inviteCode`. Both routes point to the same `SignUp` component.

When you look at the `SignUp` component, you will see that it is consuming 3 route parameters via the `useParams` hook. This is not ideal, as the sign up routes exist to perform different operations.

In `api/api.ts`, we have two 'endpoints'; `inviteCodeSignUp` and `partnerCodeSignUp`.

### Your Task

Refactor `SignUp.tsx`, pulling out `PartnerCodeSignUp` to a new component, and ensure that it can call the `partnerCodeSignUp` api endpoint. We will need to ensure we are able to collect the right data to send to the endpoint.

Please think about form validation and handling any errors you might receive from the API.

### Stretch Goal & Discussion

If you have time, it would be great to think about how you could continue to refactor the `SignUp.tsx` file, and its child components.
