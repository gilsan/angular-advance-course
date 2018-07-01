import * as passwordValidator from 'password-validator';

// 스키마 생성
const schema = new passwordValidator();

schema
  .is().min(6)
  .has().digits()
  .has().not().spaces()
  .is().not().oneOf(['Passw0rd']);

export function validatePassword(password: string) {
   const  result = schema.validate(password, { list: true});
  // console.log('[' + password + '] Password validate: ', result );
   return result;
}

