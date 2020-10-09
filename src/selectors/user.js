import { createSelector } from 'reselect';

export const userSelectJWT = ({
  user: {
    details: { token }
  }
}) => token;

export const userSelectIsLoggedIn = createSelector(userSelectJWT, token => {
  return Boolean(token);
});

export const userSelectLoginChecked = ({ login: { checked } }) => checked;
