package org.cnu.realcoding.callSummoner.callSummoner.repository;

import org.cnu.realcoding.callSummoner.callSummoner.domain.League;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class RiotDataRepository {
    @Autowired
    private MongoTemplate mongoTemplate;

    public void insertRoitData(League league) {
        this.mongoTemplate.insert(league);
    }
}
