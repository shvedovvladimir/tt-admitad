export const notificationEventWithUsers = {
    event: {
        eventId: 1,
        eventTypeCode: 'EEventType | string;',
        eventMeta: 'any;',
        createdAt: '2019-02-06 13:14:06',
        updatedAt: '2019-02-06 13:14:06',
        deletedAt: null,
    },
    users: [
        {
            userId: 1,
            unsubscribeCrypt: 'string',
        },
        {
            userId: 2,
            unsubscribeCrypt: 'string',
        },
    ],
    eventType: 'string',
    channelId: 1,
    data: {
        meta: 'some test data',
    },
};

export const notificationEventWithOneUsers = {
    event: {
        eventId: 1,
        eventTypeCode: 'EEventType | string;',
        eventMeta: 'any;',
        createdAt: '2019-02-06 13:14:06',
        updatedAt: '2019-02-06 13:14:06',
        deletedAt: null,
    },
    users: [
        {
            userId: 1,
            unsubscribeCrypt: 'string',
        },
    ],
    eventType: 'string',
    channelId: 1,
    data: {
        meta: 'some test data',
    },
};

export const notificationEventWithOutUsers = {
    event: {
        eventId: 1,
        eventTypeCode: 'EEventType | string;',
        eventMeta: 'any;',
        createdAt: '2019-02-06 13:14:06',
        updatedAt: '2019-02-06 13:14:06',
        deletedAt: null,
    },
    users: [ ],
    eventType: 'string',
    channelId: 1,
    data: {
        meta: 'some test data',
    },
};