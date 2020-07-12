CREATE TABLE "user"."customer"(
        "first" ascii,
        "last" ascii,
        "email" ascii,
        "number" bigint,
        "barangay" ascii,
        "city" ascii,
        "province" ascii,
        "temperature" float,
        "timestamp" timestamp,
        "establishment" ascii,
        "address" ascii,
        "establishmentid" uuid,
        "latitude" double,
        "longitude" double,
        PRIMARY KEY("establishmentid", "number", "email", "last", "first", "province", "city", "barangay"))
WITH CUSTOM_PROPERTIES = {'capacity_mode':{'throughput_mode':'PAY_PER_REQUEST'}} AND CLUSTERING ORDER BY("number" ASC, "email" ASC, "last" ASC, "first" ASC, "province" ASC, "city" ASC, "barangay" ASC)
