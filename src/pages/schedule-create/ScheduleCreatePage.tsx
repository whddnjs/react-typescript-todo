import React, { FormEvent, FormEventHandler, ReactEventHandler, useState } from "react";

export function ScheduleCreatePage() {

    return (
        <div>
            <form>
                <input type="text" placeholder="제목을 입력해주세요." className="input input-bordered w-full" name="title" />
                <textarea className="textarea textarea-bordered" placeholder="내용을 입력해주세요." name="content"></textarea>
                <button className="btn">생성</button>
            </form>
        </div>
    )
}