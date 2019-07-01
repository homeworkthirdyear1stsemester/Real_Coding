package org.cnu.realcoding.callSummoner.callSummoner.service;

import org.cnu.realcoding.callSummoner.callSummoner.api.SummonerApiClient;
import org.cnu.realcoding.callSummoner.callSummoner.domain.League;
import org.cnu.realcoding.callSummoner.callSummoner.repository.RiotDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class RiotService {

    @Autowired
    private RiotDataRepository riotDataRepository;
    @Autowired
    private SummonerApiClient summonerApiClient;

    public void insertDataInMongoDB(String nameOfSummoner) throws IOException {
        String idOfSummoner = summonerApiClient.getDataOfEncrypedID(nameOfSummoner).getID();
        League leagueOfGamer = this.summonerApiClient.getLeagueInfoByID(idOfSummoner);
        riotDataRepository.insertRoitData(leagueOfGamer);
    }
}