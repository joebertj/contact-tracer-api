CREATE TABLE "user"."customer"(
        "first" text,
        "last" text,
        "email" text,
        "number" bigint,
        "barangay" text,
        "city" text,
        "province" text,
        "temperature" float,
        "timestamp" timestamp,
        "establishment" text,
        "address" text,
        "establishmentid" uuid,
        "latitude" double,
        "longitude" double,
        PRIMARY KEY("establishmentid", "number", "email", "last", "first", "province", "city", "barangay"))
WITH CUSTOM_PROPERTIES = {'capacity_mode':{'throughput_mode':'PAY_PER_REQUEST'}} AND CLUSTERING ORDER BY("number" ASC, "email" ASC, "last" ASC, "first" ASC, "province" ASC, "city" ASC, "barangay" ASC)
