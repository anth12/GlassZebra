﻿/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.3.0.0 (NJsonSchema v10.1.11.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export interface IGameClient {
    create(command: CreateGameCommand): Promise<CreateGameResponse>;
    update(command: UpdateGameCommand): Promise<FileResponse>;
    get(clientId: string): Promise<GameDto>;
    join(joinCode: string | null): Promise<JoinGameResponse>;
    leave(command: ParticipantGameCommand): Promise<FileResponse>;
}

export class GameClient implements IGameClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    create(command: CreateGameCommand): Promise<CreateGameResponse> {
        let url_ = this.baseUrl + "/api/Game";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCreate(_response);
        });
    }

    protected processCreate(response: Response): Promise<CreateGameResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = CreateGameResponse.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CreateGameResponse>(<any>null);
    }

    update(command: UpdateGameCommand): Promise<FileResponse> {
        let url_ = this.baseUrl + "/api/Game";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ = <RequestInit>{
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/octet-stream"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdate(_response);
        });
    }

    protected processUpdate(response: Response): Promise<FileResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FileResponse>(<any>null);
    }

    get(clientId: string): Promise<GameDto> {
        let url_ = this.baseUrl + "/api/Game/{clientId}";
        if (clientId === undefined || clientId === null)
            throw new Error("The parameter 'clientId' must be defined.");
        url_ = url_.replace("{clientId}", encodeURIComponent("" + clientId)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<GameDto> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = GameDto.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<GameDto>(<any>null);
    }

    join(joinCode: string | null): Promise<JoinGameResponse> {
        let url_ = this.baseUrl + "/api/Game/Join/{joinCode}";
        if (joinCode === undefined || joinCode === null)
            throw new Error("The parameter 'joinCode' must be defined.");
        url_ = url_.replace("{joinCode}", encodeURIComponent("" + joinCode)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "POST",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processJoin(_response);
        });
    }

    protected processJoin(response: Response): Promise<JoinGameResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = JoinGameResponse.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<JoinGameResponse>(<any>null);
    }

    leave(command: ParticipantGameCommand): Promise<FileResponse> {
        let url_ = this.baseUrl + "/api/Game/Leave";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/octet-stream"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processLeave(_response);
        });
    }

    protected processLeave(response: Response): Promise<FileResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FileResponse>(<any>null);
    }
}

export class CreateGameResponse implements ICreateGameResponse {
    gameClientId?: string;
    participantClientId?: string;

    constructor(data?: ICreateGameResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.gameClientId = _data["gameClientId"];
            this.participantClientId = _data["participantClientId"];
        }
    }

    static fromJS(data: any): CreateGameResponse {
        data = typeof data === 'object' ? data : {};
        let result = new CreateGameResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["gameClientId"] = this.gameClientId;
        data["participantClientId"] = this.participantClientId;
        return data; 
    }
}

export interface ICreateGameResponse {
    gameClientId?: string;
    participantClientId?: string;
}

export class CreateGameCommand implements ICreateGameCommand {
    name?: string | undefined;

    constructor(data?: ICreateGameCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): CreateGameCommand {
        data = typeof data === 'object' ? data : {};
        let result = new CreateGameCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        return data; 
    }
}

export interface ICreateGameCommand {
    name?: string | undefined;
}

export class GameDto implements IGameDto {
    id?: number;
    joinCode?: string | undefined;
    name?: string | undefined;
    status?: GameStatus;
    owner?: GameParticipantDto | undefined;
    participants?: GameParticipantDto[] | undefined;
    currentRound?: GameRoundDto | undefined;
    questionsPerRound?: number;
    numberOfRounds?: number;
    difficulty?: Difficulty;
    categories?: QuestionCategoryDto[] | undefined;

    constructor(data?: IGameDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.joinCode = _data["joinCode"];
            this.name = _data["name"];
            this.status = _data["status"];
            this.owner = _data["owner"] ? GameParticipantDto.fromJS(_data["owner"]) : <any>undefined;
            if (Array.isArray(_data["participants"])) {
                this.participants = [] as any;
                for (let item of _data["participants"])
                    this.participants!.push(GameParticipantDto.fromJS(item));
            }
            this.currentRound = _data["currentRound"] ? GameRoundDto.fromJS(_data["currentRound"]) : <any>undefined;
            this.questionsPerRound = _data["questionsPerRound"];
            this.numberOfRounds = _data["numberOfRounds"];
            this.difficulty = _data["difficulty"];
            if (Array.isArray(_data["categories"])) {
                this.categories = [] as any;
                for (let item of _data["categories"])
                    this.categories!.push(QuestionCategoryDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): GameDto {
        data = typeof data === 'object' ? data : {};
        let result = new GameDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["joinCode"] = this.joinCode;
        data["name"] = this.name;
        data["status"] = this.status;
        data["owner"] = this.owner ? this.owner.toJSON() : <any>undefined;
        if (Array.isArray(this.participants)) {
            data["participants"] = [];
            for (let item of this.participants)
                data["participants"].push(item.toJSON());
        }
        data["currentRound"] = this.currentRound ? this.currentRound.toJSON() : <any>undefined;
        data["questionsPerRound"] = this.questionsPerRound;
        data["numberOfRounds"] = this.numberOfRounds;
        data["difficulty"] = this.difficulty;
        if (Array.isArray(this.categories)) {
            data["categories"] = [];
            for (let item of this.categories)
                data["categories"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IGameDto {
    id?: number;
    joinCode?: string | undefined;
    name?: string | undefined;
    status?: GameStatus;
    owner?: GameParticipantDto | undefined;
    participants?: GameParticipantDto[] | undefined;
    currentRound?: GameRoundDto | undefined;
    questionsPerRound?: number;
    numberOfRounds?: number;
    difficulty?: Difficulty;
    categories?: QuestionCategoryDto[] | undefined;
}

export enum GameStatus {
    Lobby = 0,
    InProgress = 1,
    Over = 2,
}

export class GameParticipantDto implements IGameParticipantDto {
    id?: number;
    name?: string | undefined;
    status?: ParticipantStatus;
    isOwner?: boolean;
    image?: string | undefined;
    totalScore?: number;
    roundScore?: number;

    constructor(data?: IGameParticipantDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.status = _data["status"];
            this.isOwner = _data["isOwner"];
            this.image = _data["image"];
            this.totalScore = _data["totalScore"];
            this.roundScore = _data["roundScore"];
        }
    }

    static fromJS(data: any): GameParticipantDto {
        data = typeof data === 'object' ? data : {};
        let result = new GameParticipantDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["status"] = this.status;
        data["isOwner"] = this.isOwner;
        data["image"] = this.image;
        data["totalScore"] = this.totalScore;
        data["roundScore"] = this.roundScore;
        return data; 
    }
}

export interface IGameParticipantDto {
    id?: number;
    name?: string | undefined;
    status?: ParticipantStatus;
    isOwner?: boolean;
    image?: string | undefined;
    totalScore?: number;
    roundScore?: number;
}

export enum ParticipantStatus {
    Active = 1,
    Inactive = 2,
    Disconnected = 4,
    Left = 8,
}

export class GameRoundDto implements IGameRoundDto {
    id?: number;
    type?: GameType;
    currentQuestion?: QuestionDto | undefined;
    currentQuestionTimeUtc?: Date;
    currentQuestionIndex?: number;

    constructor(data?: IGameRoundDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.type = _data["type"];
            this.currentQuestion = _data["currentQuestion"] ? QuestionDto.fromJS(_data["currentQuestion"]) : <any>undefined;
            this.currentQuestionTimeUtc = _data["currentQuestionTimeUtc"] ? new Date(_data["currentQuestionTimeUtc"].toString()) : <any>undefined;
            this.currentQuestionIndex = _data["currentQuestionIndex"];
        }
    }

    static fromJS(data: any): GameRoundDto {
        data = typeof data === 'object' ? data : {};
        let result = new GameRoundDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["type"] = this.type;
        data["currentQuestion"] = this.currentQuestion ? this.currentQuestion.toJSON() : <any>undefined;
        data["currentQuestionTimeUtc"] = this.currentQuestionTimeUtc ? this.currentQuestionTimeUtc.toISOString() : <any>undefined;
        data["currentQuestionIndex"] = this.currentQuestionIndex;
        return data; 
    }
}

export interface IGameRoundDto {
    id?: number;
    type?: GameType;
    currentQuestion?: QuestionDto | undefined;
    currentQuestionTimeUtc?: Date;
    currentQuestionIndex?: number;
}

export enum GameType {
    Quiz = 0,
    Doodle = 1,
}

export class QuestionDto implements IQuestionDto {
    id?: number;
    question?: string | undefined;
    type?: QuestionType;
    difficulty?: Difficulty;
    categories?: QuestionCategoryDto[] | undefined;
    answers?: string[] | undefined;

    constructor(data?: IQuestionDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.question = _data["question"];
            this.type = _data["type"];
            this.difficulty = _data["difficulty"];
            if (Array.isArray(_data["categories"])) {
                this.categories = [] as any;
                for (let item of _data["categories"])
                    this.categories!.push(QuestionCategoryDto.fromJS(item));
            }
            if (Array.isArray(_data["answers"])) {
                this.answers = [] as any;
                for (let item of _data["answers"])
                    this.answers!.push(item);
            }
        }
    }

    static fromJS(data: any): QuestionDto {
        data = typeof data === 'object' ? data : {};
        let result = new QuestionDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["question"] = this.question;
        data["type"] = this.type;
        data["difficulty"] = this.difficulty;
        if (Array.isArray(this.categories)) {
            data["categories"] = [];
            for (let item of this.categories)
                data["categories"].push(item.toJSON());
        }
        if (Array.isArray(this.answers)) {
            data["answers"] = [];
            for (let item of this.answers)
                data["answers"].push(item);
        }
        return data; 
    }
}

export interface IQuestionDto {
    id?: number;
    question?: string | undefined;
    type?: QuestionType;
    difficulty?: Difficulty;
    categories?: QuestionCategoryDto[] | undefined;
    answers?: string[] | undefined;
}

export enum QuestionType {
    SingleChoiceQuestion = 1,
    MultipleChoiceQuestion = 2,
    FreeTextQuestion = 4,
    SingleChoiceBuzzInQuestion = 9,
    FreeTextDoodle = 16,
}

export enum Difficulty {
    Easy = 1,
    Average = 2,
    Hard = 4,
    VeryHard = 8,
}

export class QuestionCategoryDto implements IQuestionCategoryDto {
    id?: number;
    name?: string | undefined;

    constructor(data?: IQuestionCategoryDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): QuestionCategoryDto {
        data = typeof data === 'object' ? data : {};
        let result = new QuestionCategoryDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        return data; 
    }
}

export interface IQuestionCategoryDto {
    id?: number;
    name?: string | undefined;
}

export class JoinGameResponse implements IJoinGameResponse {
    gameClientId?: string;
    game?: GameDto | undefined;
    participantClientId?: string;
    participant?: GameParticipantDto | undefined;

    constructor(data?: IJoinGameResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.gameClientId = _data["gameClientId"];
            this.game = _data["game"] ? GameDto.fromJS(_data["game"]) : <any>undefined;
            this.participantClientId = _data["participantClientId"];
            this.participant = _data["participant"] ? GameParticipantDto.fromJS(_data["participant"]) : <any>undefined;
        }
    }

    static fromJS(data: any): JoinGameResponse {
        data = typeof data === 'object' ? data : {};
        let result = new JoinGameResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["gameClientId"] = this.gameClientId;
        data["game"] = this.game ? this.game.toJSON() : <any>undefined;
        data["participantClientId"] = this.participantClientId;
        data["participant"] = this.participant ? this.participant.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IJoinGameResponse {
    gameClientId?: string;
    game?: GameDto | undefined;
    participantClientId?: string;
    participant?: GameParticipantDto | undefined;
}

export class ParticipantGameCommand implements IParticipantGameCommand {
    gameClientId?: string;
    participantClientId?: string;

    constructor(data?: IParticipantGameCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.gameClientId = _data["gameClientId"];
            this.participantClientId = _data["participantClientId"];
        }
    }

    static fromJS(data: any): ParticipantGameCommand {
        data = typeof data === 'object' ? data : {};
        let result = new ParticipantGameCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["gameClientId"] = this.gameClientId;
        data["participantClientId"] = this.participantClientId;
        return data; 
    }
}

export interface IParticipantGameCommand {
    gameClientId?: string;
    participantClientId?: string;
}

export class UpdateGameCommand extends ParticipantGameCommand implements IUpdateGameCommand {
    name?: string | undefined;
    questionsPerRound?: number;
    numberOfRounds?: number;
    difficulty?: Difficulty;
    categories?: number[] | undefined;

    constructor(data?: IUpdateGameCommand) {
        super(data);
    }

    init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.name = _data["name"];
            this.questionsPerRound = _data["questionsPerRound"];
            this.numberOfRounds = _data["numberOfRounds"];
            this.difficulty = _data["difficulty"];
            if (Array.isArray(_data["categories"])) {
                this.categories = [] as any;
                for (let item of _data["categories"])
                    this.categories!.push(item);
            }
        }
    }

    static fromJS(data: any): UpdateGameCommand {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateGameCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["questionsPerRound"] = this.questionsPerRound;
        data["numberOfRounds"] = this.numberOfRounds;
        data["difficulty"] = this.difficulty;
        if (Array.isArray(this.categories)) {
            data["categories"] = [];
            for (let item of this.categories)
                data["categories"].push(item);
        }
        super.toJSON(data);
        return data; 
    }
}

export interface IUpdateGameCommand extends IParticipantGameCommand {
    name?: string | undefined;
    questionsPerRound?: number;
    numberOfRounds?: number;
    difficulty?: Difficulty;
    categories?: number[] | undefined;
}

export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: { [name: string]: any };
}

export class ApiException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}