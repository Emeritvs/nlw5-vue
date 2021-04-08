import { Mutations } from './Challenges/types';

export const actions = {
  nuxtServerInit({ commit } : any, { app } : any) {
    console.log('teste')
    const cookie = app.$cookiz.get('movueit');
    console.error(cookie);
    if(cookie) {
      commit(`Challenges/${Mutations.SAVE_COOKIE_DATA}`, cookie); 
    }
    
  }
}