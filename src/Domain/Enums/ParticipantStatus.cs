﻿
namespace CleanArchitecture.Domain.Enums
{
	public enum ParticipantStatus
	{
		Active = 1,

		Inactive = 1<<1,

		Disconnected = 1<<2,

		Left = 1<<3
	}
}
