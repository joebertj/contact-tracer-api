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
	"uuid" ascii,
	"latitude" double,
	"longitude" double,
	PRIMARY KEY(("first", "last", "email", "number"), "barangay", "city", "province", "temperature", "timestamp", "establishment", "uuid"))
WITH CUSTOM_PROPERTIES = {'capacity_mode':{'throughput_mode':'PAY_PER_REQUEST'}} AND CLUSTERING ORDER BY("barangay" ASC, "city" ASC, "province" ASC, "temperature" ASC, "timestamp" ASC, "establishment" ASC, "uuid" ASC)
