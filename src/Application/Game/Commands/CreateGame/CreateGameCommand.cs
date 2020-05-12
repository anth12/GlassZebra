﻿using System.Threading;
using System.Threading.Tasks;
using CleanArchitecture.Application.Common.Interfaces;
using CleanArchitecture.Application.Services.Game;
using CleanArchitecture.Domain.Entities;
using CleanArchitecture.Domain.Enums;
using MediatR;

namespace CleanArchitecture.Application.Game.Commands.CreateGame
{
	public class CreateGameCommand : IRequest<CreateGameResponse>
	{
		public string Name { get; set; }
	}

	public class CreateGameCommandHandler : IRequestHandler<CreateGameCommand, CreateGameResponse>
	{
		private readonly IApplicationDbContext _context;
		private readonly IGameCodeService _gameCodeService;

		public CreateGameCommandHandler(IApplicationDbContext context, IGameCodeService gameCodeService)
		{
			_context = context;
			_gameCodeService = gameCodeService;
		}

		public async Task<CreateGameResponse> Handle(CreateGameCommand request, CancellationToken cancellationToken)
		{
			var owner = new GamePlayer
			{
				Name = "Quiz Master",
				IsOwner = true
			};

			var joinCode = await _gameCodeService.CreateUniqueCodeAsync();

			var game = new Domain.Entities.Game
			{
				Name = request.Name ?? joinCode,
				JoinCode = joinCode,
				Status = GameStatus.Lobby,
			};

			game.Players.Add(owner);
			
			_context.Games.Add(game);
			await _context.SaveChangesAsync(cancellationToken);

			return new CreateGameResponse
			{
				GameClientId = game.ClientId,
				PlayerClientId = owner.ClientId
			};
		}
	}
}
