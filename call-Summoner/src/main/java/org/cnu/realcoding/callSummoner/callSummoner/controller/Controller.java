package org.cnu.realcoding.callSummoner.callSummoner.controller;

import org.cnu.realcoding.callSummoner.callSummoner.api.SummonerApiClient;
import org.cnu.realcoding.callSummoner.callSummoner.domain.League;
import org.cnu.realcoding.callSummoner.callSummoner.service.RiotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class Controller {

    @Autowired
    private SummonerApiClient summonerService;
    @Autowired
    private RiotService riotService;

    @GetMapping("/Name/{name}")
    public String getLeagueInfoByName(@PathVariable String name) throws IOException {
        this.insertDataToDB(name);
        String idOfSummoner = summonerService.getDataOfEncrypedID(name).getID();
        return summonerService.getStringInforById(idOfSummoner);
    }

    private void insertDataToDB(String name) throws IOException {
        this.riotService.insertDataInMongoDB(name);
    }

}
