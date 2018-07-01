import {Application, Request, Response} from 'express';
import { AllUserData} from '../../src/app/scotch/home/chat/share/to/all-user-data';
import {findDbThreadsPerUser} from '../persistence/findDbThreadsPerUser';
import * as _ from 'lodash';
import {dbMessages, dbParticipants} from '../db-data-data';
import {Message} from '../../src/app/scotch/home/chat/share/model/message';

export function apiGetUserThreads(app: Application) {

    app.route('/api/threads').get((req: Request, res: Response) => {

        const participantId = 1;

        const threadsPerUser = findDbThreadsPerUser(participantId);

        let messages: Message[] = [],
            participantIds: string[] = [];

        threadsPerUser.forEach(thread => {

            const threadMessages: Message[] = _.filter(dbMessages, (message: any) => message.threadId == thread.id);

            messages = messages.concat(threadMessages);

            participantIds  = participantIds.concat(_.keys(thread.participants));

        });

        const participants = _.uniq(participantIds.map(participantId => dbParticipants[participantId]));

        const response: AllUserData = {
          participants,
          messages,
            threads: threadsPerUser
        };

        res.status(200).json(response);

    });


}

/*
import { Application, Request, Response } from 'express';
import { AllUserData } from '../../src/app/scotch/home/chat/share/to/all-user-data';
import { findDbThreadsPerUser } from '../persistence/findDbThreadsPerUser';
import * as _ from 'lodash';
import { dbMessages, dbParticipants } from '../db-data';
import { Message } from '../../src/app/scotch/home/chat/share/model/message';
import { AllUserData } from './../../src/app/scotch/home/chat/share/to/all-user-data';

 export function apiGetUserThreads(app: Application) {
   app.route('/api/threads').get((req: Request, res: Response) => {
    const participantId = 1;

    const threadsPerUser = findDbThreadsPerUser(participantId);
     console.log('apiGetUser');




    let messages: Message[] = [],
        participantIds: string[] = [];

    threadsPerUser.forEach(thread => {

        const threadMessages: Message[] = _.filter(dbMessages, (message: any) => message.threadId == thread.id);

        messages = messages.concat(threadMessages);

        participantIds  = participantIds.concat(_.keys(thread.participants));

     });
     const participants = _.uniq(participantIds.map(participantId => dbParticipants[participantId]));

     const response: AllUserData = {
       participants,
       messages,
         threads: threadsPerUser
     };

     res.status(200).json(response);
   });
 }
  */
