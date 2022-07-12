import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs';

export class CustomInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler){
        // console.log(context);
        console.log('before the request process, Custom interceptor');
        
        return next.handle().pipe(map((data)=> {
            console.log('after the request process, Custom interceptor');

            
            //! be careful: it just works for single data not array one
            const response = {...data,
                     createdAt: data.created_at,
                      amount: data.amount * 2}; //! just for fun I doubled the amount to make people happy

            delete response.created_at;
            delete response.updated_at;

            return response; 
        }));
    }
}