import React from 'react';
import stylescss from '../stylesheet.scss';

export default function Home() {
  return (
    <div className={'${stylescss.bodyClass} bodyClass'}>
        <div className={'${stylescss.ContainerMain} ContainerMain'}>
            <h1>Home page</h1>
            <div className={'${stylescss.TextCont} TextCont'}>
                <p>This is home page
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed sollicitudin faucibus dui in tristique. Aliquam erat volutpat. 
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur 
                ridiculus mus. Nam quam tortor, varius non viverra nec, aliquam ac est. 
                Sed sed venenatis quam. Duis maximus sem tellus, ut venenatis erat finibus 
                ac. Nunc accumsan tempus sapien sit amet tristique. Maecenas mattis metus 
                at tortor ullamcorper hendrerit. Nullam sed hendrerit nibh. Integer vestibulum 
                metus id nibh imperdiet dapibus. Sed ut hendrerit ex.</p>

                <p>Praesent quis eros ligula. Sed ullamcorper diam ac felis mattis gravida. 
                Integer vel suscipit lacus. Integer ac risus pellentesque, scelerisque nibh sed, 
                dapibus ipsum. Nam feugiat libero a accumsan rhoncus. Maecenas tortor tellus, 
                venenatis eu metus sit amet, mattis ornare nunc. Nunc nec congue ipsum. Nunc 
                tincidunt luctus mi quis dapibus. Nullam aliquam quam at porttitor accumsan.
                Etiam purus massa, rutrum ut facilisis eu, rutrum vitae erat. Duis egestas 
                purus sit amet elit luctus rhoncus in ut nibh. Duis consectetur tincidunt eros,
                at ultricies metus euismod ac. Phasellus quis nunc ligula.
                </p>
                <p>
                Mauris sit amet mi risus. 
                Phasellus viverra ligula mauris, vel blandit neque vulputate sed. 
                Quisque egestas lectus sit amet scelerisque rutrum. 
                Phasellus nec erat eu lacus eleifend elementum auctor non ex.
                Praesent ut lorem eget nulla pretium tempor.
                Aliquam in gravida lectus, pellentesque vulputate quam. 
                Nam volutpat eleifend lorem.</p>

                <p>Fusce in tincidunt nulla. 
                Donec accumsan eleifend ligula, in commodo enim. 
                Suspendisse feugiat magna nec faucibus dignissim. 
                Pellentesque pretium eleifend consequat. 
                Nam cursus id neque sed mollis. 
                Sed eget justo volutpat ipsum rutrum mattis sit amet non tellus. 
                Nam feugiat porttitor nisi, in viverra erat mollis vitae. 
                Nam venenatis molestie eleifend.
                Duis quam nunc, posuere eu sollicitudin sit amet, lacinia vitae ipsum. 
                Vivamus porta purus ut pulvinar hendrerit. Nam in imperdiet metus. 
                Donec quis metus neque.</p>

                <p>Aenean dapibus eros leo, quis eleifend orci egestas in. 
                Proin non ipsum erat. Suspendisse finibus et ante eu molestie.
                Vestibulum bibendum et dui ac eleifend. Donec eu vestibulum lectus.
                Etiam id facilisis tortor. Integer efficitur rhoncus risus, sed vehicula dui ultricies at.
                Vestibulum in ex non nisl aliquam luctus eu ultricies neque. 
                Quisque tempor massa nec lacinia eleifend. Nunc eu egestas massa. 
                Cras at urna ante. Mauris egestas rhoncus risus non dictum. 
                Integer dignissim accumsan erat eu placerat. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames 
                ac turpis egestas. Aliquam vel risus justo.
                Suspendisse pulvinar luctus turpis, eget pulvinar turpis vestibulum et.
                </p>
            </div>
        </div>
    </div>
  )
}
