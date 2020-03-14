import { EventEmitter } from 'events';
import { Readable } from 'stream';
import { ValueType, Redis, Pipeline } from 'ioredis';

export class RedisMock  extends EventEmitter implements Redis {
    // tslint:disable-next-line: variable-name
    public Promise: any;
    public status: string;

    public cache: Map<any, any> = new Map();

    public getBuiltinCommands(): any {
        throw new Error('Not implemented in mock class');
    }

    public createBuiltinCommand(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public defineCommand(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public sendCommand(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public connect(callback?: () => void): Promise<void> {
        return;
    }
    public disconnect(): void {
        return;
    }
    public duplicate(): Redis {
        return;
    }

    public send_command(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public bitcount(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public get(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public getBuffer(key: KeyType | string): Promise<Buffer> {
        return this.cache.get(key);
    }

    public set(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public setBuffer(...args: any[]): Promise<any> {
        this.cache.set(args[0], args[1]);
        setTimeout(() => {
            this.cache.delete(args[0]);
        }, args[3]);

        return;
    }

    public setnx(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public setex(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public psetex(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public append(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }
    public strlen(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public del(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public unlink(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public exists(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public setbit(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public getbit(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public setrange(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public getrange(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public substr(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public incr(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public decr(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public mget(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public rpush(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public rpushBuffer(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public lpush(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public rpushx(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public lpushx(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public linsert(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public rpop(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public lpop(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public lpopBuffer(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public brpop(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public blpop(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public brpoplpush(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public llen(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public lindex(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public lset(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public lrange(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public lrangeBuffer(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public ltrim(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public lrem(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public rpoplpush(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public rpoplpushBuffer(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public sadd(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public srem(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public smove(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public sismember(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public scard(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public spop(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public srandmember(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public sinter(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public sinterstore(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public sunion(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public sunionstore(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public sdiff(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public sdiffstore(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public smembers(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public zadd(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public zaddBuffer(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public zincrby(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public zrem(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public zremrangebyscore(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public zremrangebyrank(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public zunionstore(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public zinterstore(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public zrange(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public zrevrange(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public zrangebyscore(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public zrevrangebyscore(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public zcount(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public zcard(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public zscore(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public zrank(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public zrevrank(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public hset(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public hsetBuffer(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public hsetnx(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public hget(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public hgetBuffer(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public hmset(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public hmget(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public hincrby(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public hincrbyfloat(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public hdel(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public hlen(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public hkeys(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public hvals(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public hgetall(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public hexists(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public incrby(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public incrbyfloat(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public decrby(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public getset(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public mset(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public msetnx(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public randomkey(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public select(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public move(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public rename(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public renamenx(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public expire(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public pexpire(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public expireat(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public pexpireat(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public keys(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public dbsize(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public auth(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public ping(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public echo(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public save(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public bgsave(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public bgrewriteaof(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public shutdown(...args: any): Promise<never> {
        throw new Error('Not implemented in mock class');
    }

    public lastsave(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public type(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }ß

    public multi(...arg: any): any {
        throw new Error('Not implemented in mock class');
    }

    public exec(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public discard(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public sync(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public flushdb(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public flushall(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public sort(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }
    public info(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public time(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public monitor(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public ttl(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public pttl(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public persist(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public slaveof(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public debug(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public config(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public subscribe(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public unsubscribe(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public psubscribe(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public punsubscribe(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public publish(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public publishBuffer(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public watch(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public unwatch(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public cluster(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public restore(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public migrate(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public dump(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public object(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public client(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public eval(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public evalsha(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public script(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public quit(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public scan(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public sscan(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public hscan(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public zscan(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public pfmerge(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public pfadd(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public pfcount(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public pipeline(...args: any): Pipeline {
        throw new Error('Not implemented in mock class');
    }

    public scanStream(...args: any): Readable {
        throw new Error('Not implemented in mock class');
    }
    public sscanStream(...args: any): Readable {
        throw new Error('Not implemented in mock class');
    }
    public hscanStream(...args: any): Readable {
        throw new Error('Not implemented in mock class');
    }
    public zscanStream(...args: any): Readable {
        throw new Error('Not implemented in mock class');
    }

    public xack(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public xadd(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public xclaim(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public xdel(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }
    public xgroup(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }
    public xinfo(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public xlen(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public xpending(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }
    public xrange(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public xread(...args: ValueType[]): any {
        throw new Error('Not implemented in mock class');
    }

    public xreadgroup(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public xrevrange(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }

    public xtrim(...args: any): Promise<any> {
        throw new Error('Not implemented in mock class');
    }
}