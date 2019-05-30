let res = [
    db = db.getSiblingDB('nephele'),

    db.createUser({
        user: 'panos',
        pwd: 'pa55w0rd',
        roles: [
            {role: 'readWrite', db: 'nephele'}
        ]
    })
];

printjson(res);